'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Label, Textarea, useToast } from '@erickharlein/ui';
import { bookingFormSchema, type BookingFormData } from '@erickharlein/utils';
import { Loader2 } from 'lucide-react';

interface BookingFormProps {
  services: Array<{
    type: string;
    title: string;
    duration: number;
  }>;
}

export function BookingForm({ services }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      duration: 60,
      timezone: 'America/New_York',
    },
  });

  const selectedService = watch('service_type');

  // Update duration when service changes
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const serviceType = e.target.value;
    const service = services.find((s) => s.type === serviceType);
    if (service) {
      setValue('duration', service.duration);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      toast({
        title: 'Booking request submitted!',
        description: "I'll review your request and send you a confirmation email within 24 hours.",
      });

      reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit booking. Please try again or contact me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="contact_name">Name *</Label>
        <Input id="contact_name" {...register('contact_name')} placeholder="Your name" />
        {errors.contact_name && <p className="text-sm text-destructive">{errors.contact_name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact_email">Email *</Label>
        <Input id="contact_email" type="email" {...register('contact_email')} placeholder="your.email@example.com" />
        {errors.contact_email && <p className="text-sm text-destructive">{errors.contact_email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact_phone">Phone</Label>
        <Input id="contact_phone" {...register('contact_phone')} placeholder="+1 (555) 000-0000" />
        {errors.contact_phone && <p className="text-sm text-destructive">{errors.contact_phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" {...register('company')} placeholder="Your company name" />
        {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service_type">Service Type *</Label>
        <select
          id="service_type"
          {...register('service_type')}
          onChange={handleServiceChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service.type} value={service.type}>
              {service.title} ({service.duration} min)
            </option>
          ))}
        </select>
        {errors.service_type && <p className="text-sm text-destructive">{errors.service_type.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferred_date">Preferred Date & Time *</Label>
        <Input id="preferred_date" type="datetime-local" {...register('preferred_date')} />
        {errors.preferred_date && <p className="text-sm text-destructive">{errors.preferred_date.message}</p>}
        <p className="text-xs text-muted-foreground">Provide a few options if possible</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <select
          id="timezone"
          {...register('timezone')}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="America/New_York">Eastern Time (ET)</option>
          <option value="America/Chicago">Central Time (CT)</option>
          <option value="America/Denver">Mountain Time (MT)</option>
          <option value="America/Los_Angeles">Pacific Time (PT)</option>
          <option value="UTC">UTC</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          {...register('notes')}
          placeholder="Tell me about your project or what you'd like to discuss..."
          rows={4}
        />
        {errors.notes && <p className="text-sm text-destructive">{errors.notes.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </Button>
    </form>
  );
}
