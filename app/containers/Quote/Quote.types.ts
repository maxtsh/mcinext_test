export interface Image {
  picture_id: number;
  _links: {
    images: { href: string };
    self: { href: string };
    thumbnail: { href: string };
  };
}

export interface DataType {
  query: { page: number; resultPerPage: number };
  total: number;
  _embedded: {
    images: Image[];
  };
  links: {
    first: { href: string };
    last: { href: string };
    next: { href: string };
    self: { href: string };
  };
}
