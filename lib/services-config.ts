import { Code, Smartphone, Wifi, Cloud, Shield, Zap, Database, Cpu, Globe, Headphones } from "lucide-react"
import { services } from "../services-data.js";

export interface SubService {
  name: string
  description: string
  technologies: string[]
  features: string[]
}

// If you need an icon map, define it here
export const iconMap = {
  Code,
  Smartphone,
  Wifi,
  Cloud,
  Shield,
  Zap,
  Database,
  Cpu,
  Globe,
  Headphones,
};

export async function getAllServices() {
  return services;
}

export async function getServiceBySlug(slug: string) {
  const allServices = await getAllServices();
  return allServices.find((service: { slug: string }) => service.slug === slug);
}
