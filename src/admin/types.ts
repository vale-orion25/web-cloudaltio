export type ArticleStatus = "published" | "draft";
export type CampaignStatus = "sent" | "draft" | "scheduled";

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;           // e.g. "12 Abr 2026"
  readingTime: string;    // e.g. "5 min"
  image: string;
  author: string;
  authorInitials: string;
  authorRole: string;
  content: string;
  status: ArticleStatus;
  views: number;
}

export interface Campaign {
  id: number;
  name: string;
  subject: string;
  preheader: string;
  date: string;
  status: CampaignStatus;
  recipients: number;
  openRate: string;
  relatedArticle: string;
  content: string;
  cta: string;
}
