import type { Lang } from './ui';

// Article topics, as on the Insights pages and in the menu.
export const TOPICS = ['strategy', 'logistics', 'inventory', 'data'] as const;
export type TopicId = (typeof TOPICS)[number];

const names: Record<Lang, Record<TopicId, { name: string; text: string }>> = {
  en: {
    strategy: {
      name: 'Supply chain strategy',
      text: 'Network design, warehouse location and what it really costs to serve each customer.',
    },
    logistics: {
      name: 'Logistics and transport',
      text: 'Freight costs, transport modes and corridors, and the emissions they cause.',
    },
    inventory: {
      name: 'Inventory and planning',
      text: 'How much stock to hold, of which items, and how good your forecasts really are.',
    },
    data: {
      name: 'Data and analytics',
      text: 'KPIs, dashboards and the data work behind faster logistics decisions.',
    },
  },
  az: {
    strategy: {
      name: 'Təchizat zənciri strategiyası',
      text: 'Şəbəkə dizaynı, anbarın yeri və hər müştəriyə xidmətin əslində nəyə başa gəldiyi.',
    },
    logistics: {
      name: 'Logistika və daşıma',
      text: 'Daşıma xərcləri, nəqliyyat növləri və dəhlizlər, eləcə də onların yaratdığı emissiyalar.',
    },
    inventory: {
      name: 'Ehtiyat və planlaşdırma',
      text: 'Hansı məhsuldan nə qədər ehtiyat saxlamaq və proqnozlarınızın əslində nə qədər dəqiq olduğu.',
    },
    data: {
      name: 'Məlumat və analitika',
      text: 'KPI-lar, panellər və logistika qərarlarını sürətləndirən məlumat işi.',
    },
  },
};

export const topic = (lang: Lang, id: TopicId) => names[lang][id];
export const topicPath = (id: TopicId) => `/insights/topics/${id}`;
