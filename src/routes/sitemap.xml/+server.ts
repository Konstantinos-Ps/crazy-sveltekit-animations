import type { RequestHandler } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';
import { WebsiteBaseUrl } from '$lib/web';

export const prerender = true;
export const GET: RequestHandler = async () => {
	return await sitemap.response({
		origin: WebsiteBaseUrl
	});
};
