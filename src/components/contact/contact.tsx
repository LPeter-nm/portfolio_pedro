'use client'

import { useState } from "react"; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
  };


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Vamos conversar!</h3>
              <p className="text-gray-700 mb-8">
                Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo através dos
                canais abaixo ou envie uma mensagem.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span>pg.nasmatos@outlook.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>+55 (86) 98824-2498</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Timon, Maranhão - Brasil</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entrarei em contato em breve.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Nome" name="name" value={formData.name} onChange={handleChange} required />
                    <Input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <Input placeholder="Assunto" name="subject" value={formData.subject} onChange={handleChange} required />
                  <Textarea placeholder="Sua mensagem..." rows={5} name="message" value={formData.message} onChange={handleChange} required />
                  <Button type="submit" className="w-full">Enviar Mensagem</Button>
                  {status && <p className="text-center text-sm mt-2">{status}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}