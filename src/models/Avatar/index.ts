import slugify from 'slugify'

// types and interfaces
import type { TOptions, TColors } from './types'

class Avatar {
  colors: TColors = [
    ['#fff', '#33691e'],
    ['#fff', '#5d4037'],
    ['#fff', '#01579b'],
    ['#fff', '#283593'],
    ['#fff', '#ff7171'],
    ['#fff', '#CC0000'],
    ['#fff', '#ffbc42'],
    ['#fff', '#546E7A'],
    ['#fff', '#ee6e9f'],
    ['#fff', '#0033FF'],
    ['#fff', '#4CAF50'],
    ['#fff', '#8BC34A'],
    ['#fff', '#B22222'],
    ['#fff', '#008000'],
    ['#fff', '#673AB7'],
    ['#fff', '#F08080'],
    ['#fff', '#FF5722'],
    ['#fff', '#E91E63'],
    ['#fff', '#191970'],
    ['#fff', '#800080'],
    ['#fff', '#CD853F']
  ]

  baseColor(size: number) {
    return this.colors[size][1]
  }

  textColor(size: number) {
    return this.colors[size][0]
  }

  private get random() {
    return Math.floor(Math.random() * this.colors.length)
  }

  private tag(value: string) {
    const splitName = value.split(' ')
    const n = splitName.map((char) => slugify(char).charAt(0).toUpperCase())
    const firstName = n[0]
    const lastName = n.length > 1 ? n[n.length - 1] : undefined
    return [firstName, lastName].filter(Boolean).join(' ')
  }

  get gravatar() {
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }

  generate(name: string, options: TOptions = {}) {
    const random = this.random

    // Exemplo de uso
    const w = options.width ?? 56
    const h = options.height ?? 56
    const baseColor = options.baseColor ?? this.baseColor(random)
    const textColor = options.textColor ?? this.textColor(random)

    // Criar um elemento canvas
    const canvas = document.createElement('canvas')

    canvas.width = w
    canvas.height = h

    const context = canvas.getContext('2d')!

    // Configurar cor de fundo do avatar
    context.fillStyle = baseColor
    context.fillRect(0, 0, w, h)

    // Configurar estilo do text
    context.font = `400 ${h / 2.2}px var(--font-inter)`
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = textColor

    // Obter as iniciais do nome
    const initials = this.tag(name).match(/\b\w/g) || []
    const text = initials.join('').toUpperCase()

    // Desenhar as iniciais no canvas
    context.fillText(text, w / 2, h / 2)

    // Retornar a imagem como uma string no formato de dados URI
    return canvas.toDataURL()
  }
}

export default new Avatar()
