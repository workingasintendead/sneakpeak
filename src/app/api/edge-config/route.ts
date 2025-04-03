import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import { Category } from '../../../stores/edge-config-store';

type SiteData = {
  categories?: Record<string, Category>;
};

export async function getConfigData(request: Request) {
  const url = new URL(request.url);
  const site = url.searchParams.get('site') || 'sneakpeak';

  const siteData = await get(site);

  if (siteData && typeof siteData === 'object' && 'categories' in siteData) {
    const categoriesData = (siteData as SiteData).categories ?? {};
    return NextResponse.json({ categories: categoriesData });
  }

  return NextResponse.json({ categories: {} });
}
