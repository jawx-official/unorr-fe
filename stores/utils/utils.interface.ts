export interface utils {
    title?: string;
    description?: string;
    keywords?: string;
}
export interface IUtils extends utils {
    updateUtils: (payload: utils) => void
}