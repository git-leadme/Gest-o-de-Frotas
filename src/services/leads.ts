import pb from '@/lib/pocketbase/client'

export interface LeadData {
  id?: string
  name: string
  email: string
  phone?: string
  message?: string
  company?: string
  fleetSize?: string
  created?: string
}

export const createLead = (data: LeadData) => {
  return pb.collection('leads').create(data)
}

export const getLeads = () => {
  return pb.collection('leads').getFullList<LeadData>({ sort: '-created' })
}

export const deleteLead = (id: string) => {
  return pb.collection('leads').delete(id)
}
