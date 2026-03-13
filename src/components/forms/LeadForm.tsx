import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { formatPhone } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  phone: z.string().min(14, 'Telefone inválido'),
  email: z
    .string()
    .email('E-mail inválido')
    .refine(
      (e) => !e.endsWith('@gmail.com') && !e.endsWith('@hotmail.com') && !e.endsWith('@yahoo.com'),
      'Use um e-mail corporativo',
    ),
  company: z.string().min(2, 'Empresa é obrigatória').optional(),
  fleetSize: z.string().min(1, 'Selecione o tamanho da frota').optional(),
})

interface LeadFormProps {
  isSimplified?: boolean
}

export function LeadForm({ isSimplified = false }: LeadFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      company: '',
      fleetSize: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)

    toast({
      title: 'Sucesso!',
      description: 'Recebemos seus dados. Um especialista entrará em contato em breve.',
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome Completo" className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="E-mail Corporativo"
                    type="email"
                    className="bg-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Telefone (DDD + Número)"
                    className="bg-white"
                    value={value}
                    onChange={(e) => onChange(formatPhone(e.target.value))}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {!isSimplified && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome da Empresa" className="bg-white" {...field} />
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Quantidade de Veículos" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-5">1 a 5 veículos</SelectItem>
                      <SelectItem value="6-20">6 a 20 veículos</SelectItem>
                      <SelectItem value="21-50">21 a 50 veículos</SelectItem>
                      <SelectItem value="50+">50+ veículos</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-12 text-base font-bold animate-pulse-green mt-2"
          variant="secondary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
            </>
          ) : (
            'Solicitar Contato'
          )}
        </Button>
      </form>
    </Form>
  )
}
