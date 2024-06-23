export type Props = {
  actions: [
    { text: string; type: 'rejected'; onClick(): void },
    { text: string; type: 'approved'; onClick(): void },
  ];
};
