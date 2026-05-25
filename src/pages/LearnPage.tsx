import { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CourseDashboard, { type Tab } from '../components/CourseDashboard';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const TAB_SLUGS: Record<string, Tab> = {
  overview: 'overview',
  sessions: 'sessions',
  planner: 'planner',
  blog: 'blog',
};

function tabToPath(tab: Tab): string {
  return tab === 'overview' ? '/learn' : `/learn/${tab}`;
}

export default function LearnPage() {
  const { tabSlug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialTab = useMemo<Tab>(() => {
    const queryTab = searchParams.get('tab') ?? '';
    if (queryTab in TAB_SLUGS) return TAB_SLUGS[queryTab];
    if (tabSlug && tabSlug in TAB_SLUGS) return TAB_SLUGS[tabSlug];
    return 'overview';
  }, [searchParams, tabSlug]);

  useDocumentMeta(
    'Java Learning Dashboard | Emmanuel Nwachukwu',
    'Track Java fullstack sessions, planner progress, and learning content in one dashboard.'
  );

  return (
    <main>
      <CourseDashboard
        initialTab={initialTab}
        onTabChange={(nextTab) => navigate(tabToPath(nextTab), { replace: true })}
      />
    </main>
  );
}
