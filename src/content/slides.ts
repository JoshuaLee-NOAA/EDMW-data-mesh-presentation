import { PresentationConfig } from "@/types/presentation";

export const presentationConfig: PresentationConfig = {
  title: "An Architectural Approach to Cross-Domain Data Interoperability at NOAA Fisheries",
  shortTitle: "Data Mesh Reference Architecture",
  subtitle: "Applying the Data Mesh Paradigm in Google Cloud Platform",
  author: "NOAA Enterprise Data Management Workshop",
  version: "1.0.0",
  lastUpdated: "2026",
  slides: [
    {
      id: "slide-1",
      type: "title",
      title: "An Architectural Approach to Cross-Domain Data Interoperability at NOAA Fisheries",
      subtitle: "NOAA Enterprise Data Management Workshop 2026",
      category: "ENTERPRISE ARCHITECTURE",
      author: "Joshua Lee",
      authorRole: "",
      avatarPath: "/avatar.jpg",
      date: "2026",
      tags: ["Data Mesh", "Interoperability", "Google Cloud Platform"],
      logoPath: "/titleSlide.svg",
      notes: "Title cover slide showcasing custom vector logo and Coral accent line.",
    },
    {
      id: "slide-2",
      type: "split",
      title: "The Structural Challenge",
      subtitle: "Balancing distributed autonomy with enterprise-wide integration mandates across a highly federated organization.",
      category: "THE PROBLEM",
      bullets: [
        "NOAA Fisheries operates across a highly federated structure covering distinct geographical jurisdictions.",
        "Fishery data products must satisfy overlapping statutory mandates that create inherent tensions between openness and confidentiality.",
        "Tension exists between keeping data close to its creators and ensuring cross-domain interoperability. Regional autonomy is a feature, not a bug!",
      ],
      emphasizeBulletIndices: [2],
      stats: [
        { label: "Councils", value: "8" },
        { label: "Regional Offices", value: "5" },
        { label: "Science Centers", value: "6" },
      ],
      mediaType: "diagram",
      mediaDiagramId: "MandateVenn",
      mediaCaption: "Our highly federated structure requires a data architecture that scales organizational complexity, not just data volume.",
    },
    {
      id: "slide-3",
      type: "featureGrid",
      title: "The Evolution of Big Data",
      subtitle: "Searching for patterns that scale organizational complexity, not just data volume.",
      category: "ARCHITECTURAL CONTEXT",
      features: [
        {
          id: "f-1",
          title: "Data Warehouse",
          description: [
            "Enforces a unified canonical schema (schema-on-write) for analytics.",
            "Decouples analytical workloads from transactional databases.",
            "However, central teams become bottlenecks as they force conflicting domain semantics into rigid schemas."
          ],
          iconName: "Database",
          badge: "Centralized",
          accentColor: "coral",
          imageUrl: "/warehouse.png",
          era: "1980s",
        },
        {
          id: "f-2",
          title: "Data Lake",
          description: [
            "Ingests raw, heterogeneous data without strict modeling (schema-on-read).",
            "Avoids the high upfront provisioning costs of warehouses.",
            "Without clear domain ownership, these flexible repositories deteriorate into ungoverned 'data swamps'."
          ],
          iconName: "Waves",
          badge: "Fragmented",
          accentColor: "seagrass",
          imageUrl: "/lake.png",
          era: "2010s",
          citation: "Goedegebuure et al., 2023",
        },
        {
          id: "f-3",
          title: "Data Mesh",
          description: [
            "Decentralizes accountability across autonomous domains.",
            "Empowers domain experts to curate and guarantee their own data products.",
            "Resolves warehouse bottlenecks via decentralization, and prevents lake swamps via automated governance."
          ],
          iconName: "Network",
          badge: "Federated",
          accentColor: "skygold",
          imageUrl: "/mesh.png",
          era: "2019",
          citation: "Dehghani, 2019, 2022",
          isHighlighted: true,
        },
      ],
    },
    {
      id: "slide-4",
      type: "featureGrid",
      title: "Theoretical Foundations of Domain Decomposition",
      subtitle: "Establishing the intellectual basis for decentralized analytical data architecture.",
      category: "FOUNDATIONAL PRINCIPLES",
      features: [
        {
          id: "f-1",
          title: "Conway's Law",
          description: [
            '"Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations."',
            "Software architecture inevitably mirrors the human organization that built it."
          ],
          iconName: "Network",
          badge: "Structure",
          accentColor: "noaa",
          era: "1968",
          citation: "Conway",
        },
        {
          id: "f-2",
          title: "Parnas Decomposition",
          description: [
            "\"We propose instead that one begins with a list of difficult design decisions... which are likely to change. Each module is then designed to 'hide' such a decision from the others.\"",
            "Isolate risky or changeable decisions inside individual modules behind stable interfaces to contain the blast radius of change."
          ],
          iconName: "Layers",
          badge: "Modularity",
          accentColor: "skygold",
          era: "1971",
          citation: "Parnas",
        },
        {
          id: "f-3",
          title: "Domain-Driven Design",
          description: [
            '"The software model must be deeply bound to the domain concepts... domain experts and software developers must cultivate a Ubiquitous Language."',
            "Complex software design must center on the real-world business domain using a shared vocabulary across technical and mission teams."
          ],
          iconName: "Users",
          badge: "Semantics",
          accentColor: "seagrass",
          era: "2003",
          citation: "Evans",
        },
        {
          id: "f-4",
          title: "Architectural Mapping",
          description: "",
          iconName: "Scale",
          isVisualColumn: true,
          imageStack: [
            { url: "/centralized.png", caption: "Centralized / Monolithic Teams" },
            { url: "/distributed.png", caption: "Distributed / Domain Teams" }
          ]
        },
      ],
    },
    {
      id: "slide-5",
      type: "split",
      title: "Four Principles of Data Mesh",
      subtitle: "An interdependent system for decentralized data management.",
      category: "DATA MESH CORE",
      bullets: [
        
        "Warehouses and lakes hit scaling bottlenecks as organizational complexity grows.",
        "Data mesh is a reconfiguration of technology, organization, and governance.",
        "Mesh still requires IT and data governance.",
        "Accountability for data quality and lifecycle shifts directly from IT to domain teams.",
        "Data governance are enforced computationally (code) rather than through manual gatekeeping."
      ],
      mediaType: "diagram",
      mediaDiagramId: "FourPrinciplesIntegration",
    },
    {
      id: "slide-6",
      type: "split",
      title: "NOAA Fisheries Domain Decomposition",
      subtitle: "Decomposing the data architecture into 8 functional domains that directly map to specific MSA statutory responsibilities.",
      category: "IMPLEMENTATION",
      bullets: [
        "Region as Metadata: Geographic regions and Council jurisdictions are treated as metadata attributes rather than data ownership boundaries, which prevents fragmentation and allows for single-namespace cross-regional queries.",
        "Shared Reference Products: Foundational data like species taxonomies and vessel registries are maintained centrally as shared references rather than being duplicated across domains.",
        "Strategic Alignment: This approach transforms Conway’s Law into a benefit by mirroring the MSA's intended organizational structure within the architecture."
      ],
      mediaType: "diagram",
      mediaDiagramId: "DomainDecompositionDiagram",
    },
    {
      id: "slide-7",
      type: "featureGrid",
      title: "Data as a Product (The EM Architecture)",
      subtitle: "Translating abstract 'data as a product' principles into concrete specifications, using the Electronic Monitoring (EM) architecture as a case study.",
      category: "CASE STUDY",
      titleImageUrl: "/em-image.png",
      features: [
        {
          id: "f-1",
          title: "Product Specifications",
          description: [
            "Platform-Enforced Characteristics: EM data is built to be discoverable (Data Catalog), trustworthy (SLOs/lineage), and secure (IAM/Row-level security).",
            "Data Contracts: Strict agreements specify schemas, accuracy SLOs, freshness timelines, and access rules to provide a stable, reliable interface.",
            "One Product, Three Views: A single data product computationally serves different versions of the data (aggregated, raw, de-identified) to scientists, enforcement agents, and the public, automatically enforcing MSA confidentiality rules."
          ],
          iconName: "FileText",
          badge: "Definition",
          accentColor: "seagrass",
        },
        {
          id: "f-2",
          title: "Internal Anatomy",
          description: "",
          iconName: "Database",
          isVisualColumn: true,
          diagramId: "DataProductAnatomy",
        },
        {
          id: "f-3",
          title: "Product Definition",
          description: "",
          iconName: "Settings",
          isVisualColumn: true,
          diagramId: "EMDataProductDefinition",
        },
      ],
    },
    {
      id: "slide-8",
      type: "featureGrid",
      title: "Data Product Creation & Governance",
      subtitle: "Standardizing how data products are provisioned while computationally enforcing governance.",
      category: "PLATFORM AUTOMATION",
      features: [
        {
          id: "f-1",
          title: "Standardized Provisioning",
          description: [
            "Automated Provisioning: Data Product Owners use a single Terraform template to spin up resources, apply IAM, and register metadata.",
            "Computational Governance: Security policies, access controls, and compliance frameworks are automatically inherited during provisioning.",
            "Built-in FinOps: Org Policy constraints automatically enforce tagging for 'domain' and 'cost-center', guaranteeing precise Capex-to-Opex cost attribution."
          ],
          iconName: "Settings",
          badge: "Process",
          accentColor: "skygold",
        },
        {
          id: "f-2",
          title: "Creation Workflow",
          description: "",
          iconName: "Server",
          isVisualColumn: true,
          diagramId: "DataProductCreationWorkflow",
        },
        {
          id: "f-3",
          title: "Three-Tier Governance",
          description: "",
          iconName: "Shield",
          isVisualColumn: true,
          diagramId: "ThreeTierGovernance",
        },
      ],
    },
    {
      id: "slide-9",
      type: "featureGrid",
      title: "Tradeoffs & Challenges",
      subtitle: "A sociotechnical transformation requires shifting skills and trust alongside infrastructure.",
      category: "IMPLEMENTATION REALITIES",
      features: [
        {
          id: "f-1",
          title: "Organizational Disruption",
          description: "Shifting data responsibility generates cultural friction. Domain scientists may resist new management duties.",
          iconName: "Users",
          badge: "Culture",
          accentColor: "coral",
        },
        {
          id: "f-2",
          title: "Platform Investment",
          description: "Requires significant upfront infrastructure investment. FinOps is essential for cost attribution.",
          iconName: "DollarSign",
          badge: "FinOps",
          accentColor: "skygold",
        },
        {
          id: "f-3",
          title: "Governance Complexity",
          description: "Overly restrictive governance blocks use cases; overly permissive governance undermines compliance.",
          iconName: "Settings",
          badge: "Balance",
          accentColor: "seagrass",
        },
      ],
    },
    {
      id: "slide-10",
      type: "split",
      title: "Conclusion: Future-Ready Science",
      subtitle: "Improving NOAA Data Accessibility in a Modern Technology Landscape.",
      category: "WORKSHOP THEME",
      bullets: [
        "Data mesh resolves the tension between regional autonomy and enterprise integration.",
        "Future evolution will extend the platform to support ML workloads and AI-assisted discovery.",
        "Public data consumption could serve industry planning and research transparency via the same access models.",
        "The path from fragmentation to federation is 80% people, 20% technology.",
      ],
      mediaType: "card",
      mediaCardTitle: "Research Acknowledgement",
      mediaCardItems: [
        { label: "Origin", value: "Georgetown University" },
        { label: "Course 1", value: "MTPM 5750-1 (Enterprise Mod.)" },
        { label: "Course 2", value: "MTPM/MPIT 6656-01 (Cloud)" },
        { label: "Instructor", value: "Matthew Briggs" },
      ],
      mediaCaption: "Disclaimer: Views expressed are my own and do not represent official NOAA Fisheries policy.",
    },
  ],
};
