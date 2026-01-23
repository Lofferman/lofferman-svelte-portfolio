export const PROJECT_BY_SLUG = `
  *[_type == "project" && slug.current == $slug][0]{
    title,
    content
  }
`;

export const ALL_PROJECTS = `
  *[_type == "project"] | order(order asc) {
    title,
    summary,
"coverImage": coverImage.asset->{
      url,
      metadata {
        dimensions,
      lqip
          }
        },
  techStack,
    links,
    featured,
    visibility
  }
`;


export const PROFILE_DATA = `
  *[_type == "profile"] | order(order asc) {
    name,
    headline,
    education,
    skills[]{
      name,
      "image": image.asset->{
      url,
      metadata {
        dimensions,
      lqip
        }
      }
    },
    bio,
    summary,
    links,
      "resume": resume.asset->{
    url,
    originalFilename,
    size,
    mimeType
  },
    image
  }
`;