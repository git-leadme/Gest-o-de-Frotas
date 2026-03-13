import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  fullName: z.string().min(2, 'Nome é obrigatório'),
  phone: z.string().min(10, 'Telefone inválido (mínimo 10 dígitos)'),
  email: z
    .string()
    .email('E-mail inválido')
    .refine((val) => {
      const blockedDomains = [
        'gmail.com',
        'hotmail.com',
        'yahoo.com',
        'outlook.com',
        'bol.com.br',
        'uol.com.br',
      ]
      const domain = val.split('@')[1]
      return !blockedDomains.includes(domain?.toLowerCase() || '')
    }, 'Por favor, use um e-mail corporativo'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  fleetSize: z.string().min(1, 'Selecione o tamanho da frota'),
})

export function LeadForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      company: '',
      fleetSize: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Solicitação enviada com sucesso!',
        description: 'Em breve um de nossos especialistas entrará em contato.',
      })
      form.reset()
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="João da Silva" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>DDD + Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail Corporativo</FormLabel>
                <FormControl>
                  <Input placeholder="joao@suaempresa.com.br" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Empresa</FormLabel>
              <FormControl>
                <Input placeholder="Sua Empresa LTDA" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fleetSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade de Veículos</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-10">1 a 10 veículos</SelectItem>
                  <SelectItem value="11-50">11 a 50 veículos</SelectItem>
                  <SelectItem value="51-100">51 a 100 veículos</SelectItem>
                  <SelectItem value="101-500">101 a 500 veículos</SelectItem>
                  <SelectItem value="500+">Mais de 500 veículos</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
        </Button>
      </form>
    </Form>
  )
}
