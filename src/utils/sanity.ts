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
  return await sanityClient.fetch(`*[_type == "employee"] | order(name desc) {
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

export const getEvents = async () => {
  return [
    {
      title: 'Gala 2024',
      description: '',
    },
  ];
};
