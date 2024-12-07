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
