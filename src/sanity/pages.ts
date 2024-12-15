import { sanityClient } from 'sanity:client';

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

export const getResourcesPage = async () => {
  const data = await sanityClient.fetch(`*[_type == "resourcesPage"] {
      ...,
      "heroButtons": heroButtons[]->,
      "featuredCollection": featuredCollection->{
        ...,
        resources[]->{
          ...,
        "images": images[].asset->url
        }
      },
      "videosCollection": videosCollection->{
        ...,
        resources[]->{
          ...,
        "images": images[].asset->url
        }
      },
      "externalResources": externalResources[]->{
        ...,
        "image": image.asset->url
      }
    }`);
  return data[0];
};
