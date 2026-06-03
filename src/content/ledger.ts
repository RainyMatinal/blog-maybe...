export interface LedgerEntry {
  id: string;
  publishedAt: string;
  title?: string;
  body: string;
}

export const ledgerEntries: LedgerEntry[] = [
  {
    id: 'first-ledger-row',
    publishedAt: '2026-06-02T16:30:00+08:00',
    title: '碎碎念',
    body: `感觉自己不再年轻了哦。`
  },
  {
    id: 'second-ledger-row',
    publishedAt: '2026-06-02T16:30:00+08:00',
    title: '钱钱',
    body: `本科学历不知道学费多少。`
  }
];
