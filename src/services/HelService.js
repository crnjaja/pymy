// src/services/HelService.js

const MAP_WIDTH = 1000
const MAP_HEIGHT = 520

function projectPoint(lon, lat) {
  return {
    x: ((lon + 180) / 360) * MAP_WIDTH,
    y: ((90 - lat) / 180) * MAP_HEIGHT,
    xPercent: ((lon + 180) / 360) * 100,
    yPercent: ((90 - lat) / 180) * 100,
  }
}

function cubicPoint(start, c1, c2, end, t) {
  const mt = 1 - t

  return {
    x: mt ** 3 * start.x + 3 * mt ** 2 * t * c1.x + 3 * mt * t ** 2 * c2.x + t ** 3 * end.x,
    y: mt ** 3 * start.y + 3 * mt ** 2 * t * c1.y + 3 * mt * t ** 2 * c2.y + t ** 3 * end.y,
  }
}

function cubicLength(start, c1, c2, end, samples = 42) {
  let length = 0
  let previous = start

  for (let index = 1; index <= samples; index += 1) {
    const point = cubicPoint(start, c1, c2, end, index / samples)
    length += Math.hypot(point.x - previous.x, point.y - previous.y)
    previous = point
  }

  return Math.ceil(length)
}

function arcRoute(startLonLat, endLonLat, lift = 0.18) {
  const start = projectPoint(startLonLat[0], startLonLat[1])
  const end = projectPoint(endLonLat[0], endLonLat[1])
  const dx = end.x - start.x
  const dy = end.y - start.y
  const distance = Math.hypot(dx, dy)
  const arcLift = Math.min(150, Math.max(48, distance * lift))

  const c1 = {
    x: start.x + dx * 0.31,
    y: start.y + dy * 0.13 - arcLift,
  }

  const c2 = {
    x: start.x + dx * 0.69,
    y: start.y + dy * 0.87 - arcLift,
  }

  const path = [
    `M${start.x.toFixed(1)} ${start.y.toFixed(1)}`,
    `C${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
  ].join(' ')

  return {
    path,
    length: cubicLength(start, c1, c2, end),
  }
}

function migrationRoute({
  key,
  className,
  from,
  to,
  lift,
  duration = '6.4s',
  delay = '0s',
  label,
}) {
  const route = arcRoute(from, to, lift)

  return {
    key,
    className,
    label,
    from,
    to,
    duration,
    delay,
    path: route.path,
    length: route.length,
  }
}

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
    { label: 'SNSF Funding', value: "CHF 1'744'177" },
    { label: 'Duration', value: '01.07.2025 – 30.06.2030' },
    { label: 'Team', value: '1 PI, 2 PostDoc, 1 Phd, 1 RA, 1 Dev' },
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
      index: 'WP1',
      title: 'Empirical Understanding',
      subtitle: '',
      description: 'Explore migrants experience of time + climate migration litigation.',
      aims: 'Identify the co-existence of different temporalities + interaction with access to rights',
    },
    {
      id: 'wp2',
      index: 'WP2',
      title: 'Theorizing',
      subtitle: 'Slow Violence and Climate Migration',
      description: 'Confronting existing normative frameworks with insights from case studies.',
      aims: 'Reframe international law to meet protection needs + distribution of duties',
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
      label: 'Darién Gap',
      type: 'map-point--one',
      lon: -77.66,
      lat: 8.67,
    },
    {
      key: 'usa',
      label: 'USA',
      type: 'map-point--one',
      lon: -98.58,
      lat: 39.83,
      labelClass: 'map-point--label-left',
    },
    {
      key: 'bangladesh',
      label: 'Bangladesh',
      type: 'map-point--two',
      lon: 90.36,
      lat: 23.69,
      labelClass: 'map-point--label-left',
    },
    {
      key: 'italy',
      label: 'Italy',
      type: 'map-point--two',
      lon: 12.57,
      lat: 41.87,
    },
    {
      key: 'tuvalu',
      label: 'Tuvalu',
      type: 'map-point--three',
      lon: 177.65,
      lat: -8.52,
      labelClass: 'map-point--label-left',
    },
    {
      key: 'australia',
      label: 'Australia',
      type: 'map-point--three',
      lon: 151.21,
      lat: -33.87,
      labelClass: 'map-point--label-left',
    },
  ]

  static migrationFlows = HelService.mapPoints

  static mapRoutes = [
    migrationRoute({
      key: 'darien-usa',
      className: 'route-line--one',
      from: [-77.66, 8.67],
      to: [-98.58, 39.83],
      lift: 0.2,
      duration: '5.8s',
      delay: '0s',
      label: 'Darién Gap to USA',
    }),
    migrationRoute({
      key: 'bangladesh-italy',
      className: 'route-line--two',
      from: [90.36, 23.69],
      to: [12.57, 41.87],
      lift: 0.18,
      duration: '6.6s',
      delay: '1.15s',
      label: 'Bangladesh to Italy',
    }),
    migrationRoute({
      key: 'tuvalu-australia',
      className: 'route-line--three',
      from: [177.65, -8.52],
      to: [151.21, -33.87],
      lift: 0.22,
      duration: '5.2s',
      delay: '2.3s',
      label: 'Tuvalu to Australia',
    }),
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
    const projected = projectPoint(point.lon, point.lat)
    const pointDelays = {
      'darien-gap': '0s',
      usa: '2.9s',
      bangladesh: '1.15s',
      italy: '4.45s',
      tuvalu: '2.3s',
      australia: '4.9s',
    }

    return {
      '--x': `${projected.xPercent}%`,
      '--y': `${projected.yPercent}%`,
      '--point-delay': pointDelays[point.key] || '0s',
    }
  }

  static routeStyle(route) {
    const length = Number(route.length)

    return {
      '--route-duration': route.duration || '6.4s',
      '--route-delay': route.delay || '0s',
      '--route-length': Number.isFinite(length) ? length : 900,
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
