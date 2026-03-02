import { HeroWidget }     from '@/widgets/HeroWidget'
import { StoryWidget }    from '@/widgets/StoryWidget'
import { CauseWidget }    from '@/widgets/CauseWidget'
import { DonationWidget } from '@/widgets/DonationWidget'
import { FooterWidget }   from '@/widgets/FooterWidget'

export function HomePage() {
  return (
    <main>
      <HeroWidget />
      <StoryWidget />
      <CauseWidget />
      <DonationWidget />
      <FooterWidget />
    </main>
  )
}
