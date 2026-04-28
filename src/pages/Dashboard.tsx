import { useState, useEffect } from 'react'
import { getLeads, deleteLead, type LeadData } from '@/services/leads'
import { useRealtime } from '@/hooks/use-realtime'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { format } from 'date-fns'
import { Eye, Trash2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Dashboard() {
  const [leads, setLeads] = useState<LeadData[]>([])
  const { toast } = useToast()

  const loadLeads = async () => {
    try {
      const data = await getLeads()
      setLeads(data)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível carregar os leads.',
      })
    }
  }

  useEffect(() => {
    loadLeads()
  }, [])

  useRealtime('leads', () => {
    loadLeads()
  })

  const handleDelete = async (id: string) => {
    try {
      await deleteLead(id)
      toast({ title: 'Sucesso', description: 'Lead excluído com sucesso.' })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Não foi possível excluir o lead.',
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard de Leads</h1>
          <p className="text-muted-foreground">
            Gerencie os contatos recebidos através da landing page
          </p>
        </div>
      </div>

      <div className="border rounded-md bg-white shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">Data</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Frota</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                  Nenhum lead encontrado ainda.
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="whitespace-nowrap">
                    {lead.created ? format(new Date(lead.created), 'dd/MM/yyyy HH:mm') : '-'}
                  </TableCell>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">{lead.email}</span>
                      <span className="text-xs text-muted-foreground">
                        {lead.phone || 'Sem telefone'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{lead.company || '-'}</TableCell>
                  <TableCell>{lead.fleetSize || '-'}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" title="Ver Mensagem">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Mensagem de {lead.name}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 text-sm text-foreground whitespace-pre-wrap bg-muted p-4 rounded-md min-h-[100px]">
                            {lead.message || 'Nenhuma mensagem adicional enviada.'}
                          </div>
                        </DialogContent>
                      </Dialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="icon" title="Excluir Lead">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Excluir Lead?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Tem certeza que deseja excluir o lead de <strong>{lead.name}</strong>?
                              Esta ação não pode ser desfeita e removerá os dados permanentemente.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => lead.id && handleDelete(lead.id)}>
                              Excluir
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
