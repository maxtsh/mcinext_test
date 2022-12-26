export type Sort = "forename" | "name" | "date_of_birth";

export type StateType = {
  page: number;
  limit: number;
  search: string;
  sort: Sort;
};

export type ActionTypes =
  | { type: "page"; payload: number }
  | { type: "limit"; payload: number }
  | { type: "search"; payload: string }
  | { type: "sort"; payload: Sort };

export interface Notice {
  date_of_birth: string;
  entity_id: string;
  forename: string;
  name: string;
  nationalities: string[];
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
    notices: Notice[];
  };
  links: {
    first: { href: string };
    last: { href: string };
    next: { href: string };
    self: { href: string };
  };
}
