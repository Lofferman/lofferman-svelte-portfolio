import { sanity } from '$lib/sanity/client';
import { ALL_PROJECTS, PROFILE_DATA } from '$lib/sanity/queries';

export const prerender = true;

export async function load({ params }) {
  const projects = await sanity.fetch(ALL_PROJECTS);
  const profile = await sanity.fetch(PROFILE_DATA);
  console.log(profile, projects);
  return {
    projects,
    profile
  };
}
