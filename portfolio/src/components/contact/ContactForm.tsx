import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Send } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { cn } from '@/lib/cn'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid email address'),
  subject: z.string().min(3, 'Add a short subject'),
  message: z.string().min(20, 'Message should be at least 20 characters'),
})

type FormValues = z.infer<typeof schema>

const fieldClasses =
  'w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-emerald dark:border-white/15 dark:bg-white/5'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    // No backend is wired up yet — this simulates a network call.
    await new Promise((resolve) => setTimeout(resolve, 900))
    console.log('Contact form submission', data)
    toast.success("Message sent — I'll get back to you soon.")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-muted">Your Name</label>
          <input id="name" className={fieldClasses} aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-muted">Your Email</label>
          <input id="email" type="email" className={fieldClasses} aria-invalid={!!errors.email} {...register('email')} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-medium text-muted">Subject</label>
        <input id="subject" className={fieldClasses} aria-invalid={!!errors.subject} {...register('subject')} />
        {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-muted">Message</label>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldClasses, 'resize-none')}
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-fit" icon={<Send size={15} />}>
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
