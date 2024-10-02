export interface Company {
    logo: string;
    name: string;
    description: string;
    industries: string[];
    services: string[];
    website: string;
    phone: string;
    email: string;
    address: {
      location: Record<string, unknown>;
    };
    badge: string;
  }