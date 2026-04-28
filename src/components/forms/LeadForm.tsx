import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { createLead } from '@/services/leads'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, 'Nome é obrigatório'),
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
  phone: z.string().min(10, 'Telefone inválido (mínimo 10 dígitos)'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  fleetSize: z.string().min(1, 'Selecione o tamanho da frota'),
  message: z.string().optional(),
})

export function LeadForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      fleetSize: '',
      message: '',
    },
  })

  const handleNextStep = async (fieldsToValidate: (keyof z.infer<typeof formSchema>)[]) => {
    const isValid = await form.trigger(fieldsToValidate)
    if (isValid) setStep((s) => s + 1)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await createLead({
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        company: values.company,
        fleetSize: values.fleetSize,
        message: values.message,
      })
      toast({
        description: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
      })
      form.reset()
      setStep(1)
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'Erro ao enviar o formulário. Por favor, tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 w-12 rounded-full transition-colors ${
                step >= i ? 'bg-secondary' : 'bg-secondary/20'
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo *</FormLabel>
                  <FormControl>
                    <Input placeholder="João da Silva" {...field} />
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
                  <FormLabel>E-mail Corporativo *</FormLabel>
                  <FormControl>
                    <Input placeholder="joao@suaempresa.com.br" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              onClick={() => handleNextStep(['fullName', 'email'])}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12 mt-4"
            >
              Próximo Passo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DDD + Telefone *</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa *</FormLabel>
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
                  <FormLabel>Tamanho da Frota *</FormLabel>
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
            <div className="flex gap-2 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="w-12 h-12 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                onClick={() => handleNextStep(['phone', 'company', 'fleetSize'])}
                className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12"
              >
                Próximo Passo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qual o seu maior desafio hoje? (Opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Conte um pouco sobre as dificuldades na gestão da sua frota..."
                      className="resize-none h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="w-12 h-14 p-0 shrink-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-14 text-sm md:text-base shadow-lg transition-transform hover:-translate-y-0.5"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Quero Ver Minha Economia na Prática'}
              </Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  )
}
