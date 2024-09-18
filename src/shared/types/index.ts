export type ChatData = {
    id: number;
    imageSrc: string;
    descriptionTitle: string;
    descriptionText: string;
    date: string;
    count: string | null;
};

export type SelectedKey = 'all' | 'buying' | 'selling';
