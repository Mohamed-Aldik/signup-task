export type RequestOptions = {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
    body?: string;
}