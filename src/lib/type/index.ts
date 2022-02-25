export interface Classes {
  readonly color: string
  readonly icon: string
  readonly name: string
  readonly _id: string
  readonly createdAt: string
  readonly updatedAt: string
  readonly __v: number
}

export interface Spec {
  readonly color: string
  readonly icon: string
  readonly name: string
  readonly _id: string
  readonly createdAt: string
  readonly updatedAt: string
  readonly __v: number
}

export interface Ability {
  readonly name: string
  readonly class_id: string
  readonly spec_id?: string
  readonly link_wowhead: string
  readonly wowhead_id: string
  readonly deleted: boolean
  readonly icon: string
  readonly __v: number
  readonly _id: string
  readonly createdAt: string
  readonly updatedAt: string
}
