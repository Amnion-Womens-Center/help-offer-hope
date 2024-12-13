import { sanityClient } from 'sanity:client';

export const getResources = async () => {
  const resources = await sanityClient.fetch(`*[_type == "resource"] | order(title desc) {
    title,
    type,
    images[] {
      'src': asset->url
    }
  }`);

  return resources;
};

export const getEmployees = async () => {
  return await sanityClient.fetch(`*[_type == "employee"] | order(name asc) {
    name,
    role,
    department,
    'headshot': headshot.asset->url,
  }`);
};

export const getType = async (type) => {
  return await sanityClient.fetch(`*[_type == "${type}"]`);
};

function expandBasicContent() {
  return `{
    heading,
    content,
    'image': image.asset->url,
    'buttons': buttons[]->
  }`;
}

export const getAboutContent = async () => {
  const data = await sanityClient.fetch(`*[_type == "aboutPage"] {
      ...,
      "heroImage": {
        "src": heroImage.asset->url,
        "alt": heroImage.alt
      },
      "servicesImage": {
        "src": servicesImage.asset->url,
        "alt": servicesImage.alt,
        "caption": servicesImage.caption
      },
      "historyImage": {
        "src": historyImage.asset->url,
        "alt": historyImage.alt,
        "caption": historyImage.caption
      },
      "missionList": missionList[]->{heading,content,icon}
    }`);
  return data[0];
};

export const getEventSlugs = async () => {
  return await sanityClient.fetch(`*[_type == "event" && defined(slug)] | order(name desc) {
    "slug": slug.current
  }`);
};

export const getEventBySlug = async (slug) => {
  console.log(slug);
  return await sanityClient.fetch(
    `*[_type == "event" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    "series": series->,
    "image": image.asset->url,
    "resources": resources->resources[]->{
      ...,
      "images": images[] {
        'src': asset->url
      }
    },
    "sponsors": sponsors[]->{
      ...,
      "image": image.asset->url
    }
  }`,
    { slug }
  );
};
