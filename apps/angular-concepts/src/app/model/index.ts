export interface Element {
  id: number,
  name: string,
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {[key: string]: string | {[key: string]: string}},
  company: {[key: string]: string},
  phone: string,
  website: string,
}
