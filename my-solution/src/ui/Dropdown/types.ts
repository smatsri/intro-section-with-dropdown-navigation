export type Item = {
  key?: any
  title: string
  value: string
  icon?: string
}

export type DropdownProps = {
  items?: Item[]
}