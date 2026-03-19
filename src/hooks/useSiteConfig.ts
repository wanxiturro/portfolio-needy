import config from '@/config/site.json'

export function useSiteConfig() {
  return config
}

export function usePersonalInfo() {
  return config.personal
}

export function useSocialLinks() {
  return config.social
}

export function useSkills() {
  return config.skills
}

export function useProjects() {
  return config.projects
}