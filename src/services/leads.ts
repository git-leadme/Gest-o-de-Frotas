import pb from '@/lib/pocketbase/client'

export interface LeadData {
  name: string
  email: string
  phone?: string
  message?: string
  company?: string
  fleetSize?: string
}

export const createLead = (data: LeadData) => {
  return pb.collection('leads').create(data)
}
