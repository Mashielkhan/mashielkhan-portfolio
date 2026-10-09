import type { CaseStudy } from "../types";
import { tailornex } from "./tailornex";
import { paperErp } from "./paper-erp";
import { housePricePrediction } from "./house-price-prediction";

export const caseStudies: CaseStudy[] = [tailornex, paperErp, housePricePrediction];
export const caseStudySlugs = new Set(caseStudies.map((c) => c.slug));
export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
