interface Project {
  title: string;
  description: string;
  deploymentUrl?: string;
  repositoryUrl: string;
}

export interface UnmappedProject extends Project {
  tags: { name: string }[];
}

export interface MappedProject extends Project {
  tags: string[];
}
