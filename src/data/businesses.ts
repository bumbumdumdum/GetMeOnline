export interface Business {
  name: string;
  website: string;
  sector: string;
  location: string;
}

export const BUSINESS_DATABASE: Business[] = [
  { name: "XzeCure", website: "XzeCure.com", sector: "Health", location: "Ahmedabad" },
  { name: "Adani Group", website: "adani.com", sector: "Infrastructure", location: "Ahmedabad" },
  { name: "Zydus Lifesciences", website: "zyduslife.com", sector: "Pharmaceuticals", location: "Ahmedabad" },
  { name: "Amul", website: "amul.com", sector: "Dairy", location: "Anand" },
  { name: "Torrent Power", website: "torrentpower.com", sector: "Energy", location: "Ahmedabad" },
  { name: "Nirma Limited", website: "nirma.co.in", sector: "Consumer Goods", location: "Ahmedabad" },
  { name: "Astral Pipes", website: "astralpipes.com", sector: "Manufacturing", location: "Ahmedabad" },
  { name: "Arvind Limited", website: "arvind.com", sector: "Textiles", location: "Ahmedabad" },
  { name: "Cadila Pharmaceuticals", website: "cadilapharma.com", sector: "Pharmaceuticals", location: "Ahmedabad" },
  { name: "Gujarat Gas", website: "gujaratgas.com", sector: "Energy", location: "Ahmedabad" },
  { name: "Hester Biosciences", website: "hester.in", sector: "Biotechnology", location: "Ahmedabad" },
  { name: "Infibeam Avenues", website: "ia.ooo", sector: "Fintech", location: "Gandhinagar" },
  { name: "Symphony Limited", website: "symphonylimited.com", sector: "Appliances", location: "Ahmedabad" },
  { name: "Ratnamani Metals", website: "ratnamani.com", sector: "Steel", location: "Ahmedabad" },
  { name: "Deepak Nitrite", website: "godeepak.com", sector: "Chemicals", location: "Vadodara" },
  { name: "Gujarat Fluorochemicals", website: "gfl.co.in", sector: "Chemicals", location: "Vadodara" },
  { name: "AIA Engineering", website: "aiaengineering.com", sector: "Engineering", location: "Ahmedabad" },
  { name: "Eris Lifesciences", website: "eris.co.in", sector: "Pharmaceuticals", location: "Ahmedabad" },
  { name: "Gujarat Alkalies", website: "gacl.com", sector: "Chemicals", location: "Vadodara" },
  { name: "Gujarat State Fertilizers", website: "gsfclimited.com", sector: "Fertilizers", location: "Vadodara" },
  // Adding more simulated businesses to reach a large number
  ...Array.from({ length: 480 }).map((_, i) => ({
    name: `Gujarat Business ${i + 1}`,
    website: `gujbiz${i + 1}.in`,
    sector: ["Retail", "Tech", "Food", "Manufacturing", "Services"][i % 5],
    location: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"][i % 5]
  }))
];
