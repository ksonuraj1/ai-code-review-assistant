export interface DashboardStats {
  id: string;
  title: string;
  value: string;
  trend?: string;
}

export interface RecentReview {
  id: string;
  title: string;
  status: string;
  updatedAt: string;
}
