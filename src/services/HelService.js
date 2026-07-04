// src/services/HelService.js

export class HelService {
  static PROJECT = {
    title: 'RESISTING HUMAN EROSION',
    funding: "CHF 1'744'177",
    period: {
      start: '2025-07-01',
      end: '2030-06-30',
    },
    duration: 5,
  }

  static facts = [
    { label: 'Funding', value: "CHF 1'744'177" },
    { label: 'Dates', value: '01.07.2025 – 30.06.2030' },
    { label: 'Duration', value: '5 years' },
    { label: 'Case studies', value: 'South Asia · Latin America · Pacific' },
  ]

  static overview = [
    {
      title: 'Mission',
      text: 'HUMAN EROSION reimagines the role of international law in addressing climate migration.',
    },
    {
      title: 'Research Focus',
      text: 'The project studies how migrants experience time throughout their migration journeys.',
    },
    {
      title: 'Objective',
      text: 'Develop innovative legal frameworks that better safeguard human dignity.',
    },
  ]

  static caseStudies = [
    {
      key: 'south-asia',
      index: '01',
      region: 'South Asia',
      title: 'South Asia',
      description:
        'Capturing temporal experiences of climate migrants and how these intersect with access to rights.',
    },
    {
      key: 'latin-america',
      index: '02',
      region: 'Latin America',
      title: 'Latin America',
      description:
        'Studying climate mobility trajectories, legal responses and lived experiences of slow displacement.',
    },
    {
      key: 'pacific',
      index: '03',
      region: 'Pacific',
      title: 'Pacific',
      description:
        'Examining mobility, disappearing territories and protection needs in oceanic climate futures.',
    },
  ]

  static workPackages = [
    {
      id: 'wp1',
      title: 'WP1 — Empirical Understanding',
      description: 'Exploring migrants’ experiences of time and climate migration litigation.',
      aims: [
        'Identify multiple temporalities',
        'Study interaction with access to rights',
        'Produce empirical datasets',
      ],
    },
    {
      id: 'wp2',
      title: 'WP2 — Theorizing',
      description: 'Reframing international law through insights emerging from empirical work.',
      aims: ['Climate migration governance', 'Writing Time', 'International cooperation'],
    },
  ]

  static timeline = [
    {
      key: 'wp1-south-asia',
      workPackage: 'WP1',
      track: 'WP1',
      title: 'South Asia',
      owner: 'Postdoc 1',
      subtitle: 'Postdoctoral Researcher 1',
      start: 1.8,
      end: 3,
    },
    {
      key: 'wp1-pacific',
      workPackage: 'WP1',
      track: 'WP1',
      title: 'Pacific',
      owner: 'PI',
      subtitle: 'Principal Investigator',
      start: 1.8,
      end: 3,
    },
    {
      key: 'wp1-latin-america',
      workPackage: 'WP1',
      track: 'WP1',
      title: 'Latin America',
      owner: 'Postdoc 2',
      subtitle: 'Postdoctoral Researcher 2',
      start: 1.8,
      end: 2.8,
    },
    {
      key: 'wp2-governance',
      workPackage: 'WP2',
      track: 'WP2',
      title: 'Climate Migration Governance',
      owner: 'Research team',
      subtitle: 'Research team',
      start: 1,
      end: 4.4,
    },
    {
      key: 'wp2-writing-time',
      workPackage: 'WP2',
      track: 'WP2',
      title: 'Writing Time',
      owner: 'PhD',
      subtitle: 'PhD',
      start: 2,
      end: 5,
    },
    {
      key: 'wp2-cooperation',
      workPackage: 'WP2',
      track: 'WP2',
      title: 'Cooperation',
      owner: 'Research team',
      subtitle: 'Research team',
      start: 2,
      end: 5,
    },
  ]

  static mapPoints = [
    {
      key: 'darien-gap',
      label: 'Darién Gap → USA',
      type: 'map-point--route',
      x: 18,
      y: 42,
    },
    {
      key: 'bangladesh-italy',
      label: 'Bangladesh → Italy',
      type: 'map-point--route',
      x: 55,
      y: 58,
    },
    {
      key: 'tuvalu-australia',
      label: 'Tuvalu → Australia',
      type: 'map-point--route',
      x: 84,
      y: 78,
    },
  ]

  static migrationFlows = HelService.mapPoints

  static mapRoutes = [
    {
      key: 'darien-usa',
      className: 'route-line--one',
      path: 'M150 260 C260 160 390 145 520 180 C620 210 690 180 800 125',
    },
    {
      key: 'bangladesh-italy',
      className: 'route-line--two',
      path: 'M570 290 C520 210 460 175 390 160 C330 145 290 120 250 95',
    },
    {
      key: 'tuvalu-australia',
      className: 'route-line--three',
      path: 'M820 385 C785 345 760 320 720 300 C690 285 660 270 635 245',
    },
  ]

  static outputs = [
    {
      key: 'datasets',
      type: 'Output',
      title: 'Datasets',
      description: 'Case law, interviews and legal instruments.',
      icon: 'database',
      items: ['Case law', 'Interviews', 'Legal instruments'],
    },
    {
      key: 'time-map',
      type: 'Output',
      title: 'Time Map',
      description: 'Interactive visualization of temporal dimensions.',
      icon: 'map',
      items: ['Accessible visual tool', 'Temporal rights mapping', 'Climate migration routes'],
    },
    {
      key: 'publications',
      type: 'Output',
      title: 'Publications',
      description: 'Scientific articles and legal analyses.',
      icon: 'book',
      items: ['Academic publications', 'Legal analysis', 'Policy-oriented outputs'],
    },
    {
      key: 'documentaries',
      type: 'Output',
      title: 'Documentaries',
      description: 'Video documentaries produced during fieldwork.',
      icon: 'video',
      items: ['Field narratives', 'Public communication', 'Research dissemination'],
    },
  ]

  static contributions = [
    {
      key: 'academic',
      type: 'Academic',
      title: 'Academic Contributions',
      items: [
        'Conceptualize temporalities in climate migration',
        'Provide empirical datasets',
        'Develop innovative legal frameworks',
        'Facilitate collaborative learning with field partners',
      ],
    },
    {
      key: 'policy',
      type: 'Policy',
      title: 'Policy Contributions',
      items: [
        'Support international initiatives such as the GCM and UN ILC',
        'Inform NGOs and policy makers',
        'Create accessible visual tools',
        'Train diplomatic staff',
      ],
    },
  ]

  static years() {
    return [1, 2, 3, 4, 5]
  }

  static timelineStyle(item) {
    const totalYears = HelService.PROJECT.duration

    const start = Number(item.start)
    const end = Number(item.end)

    const safeStart = Math.min(totalYears, Math.max(1, Number.isFinite(start) ? start : 1))
    const safeEnd = Math.min(
      totalYears + 1,
      Math.max(safeStart, Number.isFinite(end) ? end + 1 : safeStart),
    )

    return {
      '--timeline-left': `${((safeStart - 1) / totalYears) * 100}%`,
      '--timeline-width': `${((safeEnd - safeStart) / totalYears) * 100}%`,
    }
  }

  static workPackageClass(workPackage) {
    return `timeline-item--${String(workPackage || '')
      .toLowerCase()
      .replace(/\s+/g, '-')}`
  }

  static pointStyle(point) {
    return {
      left: `${point.x}%`,
      top: `${point.y}%`,
    }
  }

  static progress() {
    const start = new Date(HelService.PROJECT.period.start)
    const end = new Date(HelService.PROJECT.period.end)
    const now = new Date()

    const total = end.getTime() - start.getTime()
    const elapsed = now.getTime() - start.getTime()

    return Math.min(100, Math.max(0, (elapsed / total) * 100))
  }

  static durationYears() {
    return HelService.PROJECT.duration
  }

  static funding() {
    return HelService.PROJECT.funding
  }

  static formattedPeriod() {
    return 'July 2025 – June 2030'
  }
}
