import { ASSET_OPTIONS, CONSISTENCY_OPTIONS, OPTION_LABELS, PLATFORM_OPTIONS, PROBLEM_OPTIONS } from '../data/options';

const PLATFORM_GROUPS = {
  social: ['instagram', 'facebook', 'linkedin'],
  owned: ['email', 'website', 'blog'],
};

const CONSISTENCY_SUMMARIES = {
  inconsistent: {
    label: 'Early-stage rhythm',
    snapshot:
      'Your marketing likely has real effort behind it, but it is still being delivered in bursts rather than through a stable, recognizable rhythm.',
    gap: 'The central gap is operational clarity. Without a lighter system, even strong ideas are likely to land unevenly.',
    reassurance:
      'This is very workable. Most teams improve quickly once the marketing system becomes smaller, steadier, and easier to repeat.',
  },
  'somewhat-consistent': {
    label: 'Developing foundation',
    snapshot:
      'There is already a foundation here. You are showing up often enough to create familiarity, but the experience may still feel more active than truly aligned.',
    gap: 'The pressure point is usually not effort. It is the distance between what is being published and what is being reinforced clearly.',
    reassurance:
      'You do not need a reset. A few sharper decisions around message, cadence, and channel focus can make the whole system feel more composed.',
  },
  'mostly-consistent': {
    label: 'Stable presence',
    snapshot:
      'Your marketing already has a visible rhythm, which gives you a strong base. The next gains are likely to come from refinement rather than more output.',
    gap: 'The remaining gap is usually strategic cohesion: making each channel, asset, and offer point toward the same promise.',
    reassurance:
      'You are already in a strong position to improve. This stage is about precision, not volume.',
  },
  'highly-consistent': {
    label: 'Mature cadence',
    snapshot:
      'You already have consistency in place, which many teams never fully build. The opportunity now is to ensure that consistency is converting into stronger clarity and response.',
    gap: 'The main gap is likely no longer consistency itself, but sharper prioritization and message discipline.',
    reassurance:
      'You have enough structure in place for focused changes to pay off quickly.',
  },
};

const PROBLEM_DIAGNOSTICS = {
  'unclear-message': {
    broken:
      'The message appears to be carrying too much weight. If the promise is not immediately clear, every channel has to work harder just to explain the basics.',
    impact:
      'That usually means people can see activity without quickly understanding why your offer matters or why it is right for them.',
    priorityTitle: 'Clarify the core message',
    priorityDetail:
      'Reduce the message to one clear promise, one audience focus, and a small set of repeatable supporting themes that can be used across every active channel.',
  },
  'low-engagement': {
    broken:
      'The issue is likely not simply reach. It is that the current content may not be landing with enough specificity or relevance to invite a response.',
    impact:
      'When that happens, the brand stays visible, but the audience has little reason to lean in, reply, or take the next step.',
    priorityTitle: 'Increase content relevance',
    priorityDetail:
      'Review recent content and shift toward more specific, audience-centered topics with one clear takeaway or invitation in each post or campaign.',
  },
  'irregular-posting': {
    broken:
      'The publishing pattern appears too dependent on available time and energy, which makes the system fragile during busy weeks.',
    impact:
      'That creates inconsistency not because the business lacks ideas, but because the cadence is harder to maintain than it needs to be.',
    priorityTitle: 'Set a sustainable rhythm',
    priorityDetail:
      'Build a lighter weekly cadence with fewer content types and clearer ownership so the marketing system keeps moving even when the calendar tightens.',
  },
  'lead-generation': {
    broken:
      'The path from attention to action may still be too soft. Marketing can appear polished while prospects are left without a clear next move.',
    impact:
      'This tends to weaken conversion because awareness is not being guided into a concrete inquiry, signup, or offer pathway.',
    priorityTitle: 'Strengthen the conversion path',
    priorityDetail:
      'Connect your content to one visible call to action and one clear landing page, lead magnet, or inquiry step that is easy to understand and easy to take.',
  },
  'content-overwhelm': {
    broken:
      'The planning layer may still be too open-ended, which makes each new piece of content feel heavier than it should.',
    impact:
      'When the team has to decide from scratch what to say every time, consistency and clarity both become harder to protect.',
    priorityTitle: 'Simplify content planning',
    priorityDetail:
      'Narrow the plan to a few recurring themes and reuse them across the channels that matter most instead of creating from zero each time.',
  },
  'brand-misalignment': {
    broken:
      'The channels may be functioning individually, but the overall brand impression may not feel fully unified from one touchpoint to the next.',
    impact:
      'That weakens trust over time because the audience has to keep reinterpreting the tone, value, or offer depending on where they find you.',
    priorityTitle: 'Tighten brand alignment',
    priorityDetail:
      'Create a short working guide for tone, key phrases, visual rules, and offer language so each channel reinforces the same brand experience.',
  },
};

const ASSET_SIGNALS = {
  'brand-guide': {
    snapshot: 'You already have brand structure in place, which should make alignment easier once it is used more actively.',
    leverageTitle: 'Use the brand guide as a live tool',
    leverageDetail: 'Turn the existing brand guide into a practical checklist for channel copy, visuals, and offer language.',
  },
  'photo-library': {
    snapshot: 'You already have usable visual material, which lowers the effort required to publish consistently with polish.',
    leverageTitle: 'Systemize your visual assets',
    leverageDetail: 'Build a small bank of repeatable layouts and post formats around your current photo library.',
  },
  'email-list': {
    snapshot: 'You have direct audience access through email, which gives you a valuable owned channel to build around.',
    leverageTitle: 'Reactivate the email list',
    leverageDetail: 'Use one focused message and one clear offer to reconnect the list rather than sending broad or mixed updates.',
  },
  'case-studies': {
    snapshot: 'You already have proof assets available, which can increase trust if they are surfaced more deliberately.',
    leverageTitle: 'Put proof into circulation',
    leverageDetail: 'Translate one or two case studies into shorter proof-led posts, email sections, and landing-page content.',
  },
  'lead-magnet': {
    snapshot: 'You already have a lead capture asset in place, which gives the marketing system something concrete to direct attention toward.',
    leverageTitle: 'Make the lead magnet more visible',
    leverageDetail: 'Connect the existing lead magnet more clearly to your current message and place it more consistently across your active channels.',
  },
  'content-calendar': {
    snapshot: 'You already have some planning infrastructure, which is a useful advantage if it reflects the team\'s real capacity.',
    leverageTitle: 'Trim the calendar to reality',
    leverageDetail: 'Simplify the current calendar so it supports a realistic cadence rather than an idealized one.',
  },
};

function dedupe(items) {
  return [...new Set(items.filter(Boolean))];
}

function joinLabels(values) {
  return values.map((value) => OPTION_LABELS[value] ?? value).join(', ');
}

function getSelectedOptions(values, options) {
  return options.filter((option) => values.includes(option.value));
}

function getConsistencyProfile(value) {
  return CONSISTENCY_SUMMARIES[value] ?? CONSISTENCY_SUMMARIES['somewhat-consistent'];
}

function getPrimaryProblem(formData) {
  return getSelectedOptions(formData.problems, PROBLEM_OPTIONS)[0] ?? null;
}

function getPrimaryAsset(formData) {
  return getSelectedOptions(formData.assets, ASSET_OPTIONS)[0] ?? null;
}

function getProblemLabels(formData, limit = 2) {
  return getSelectedOptions(formData.problems, PROBLEM_OPTIONS)
    .slice(0, limit)
    .map((option) => option.label);
}

function getAssetLabels(formData, limit = 2) {
  return getSelectedOptions(formData.assets, ASSET_OPTIONS)
    .slice(0, limit)
    .map((option) => option.label);
}

function formatList(items) {
  if (items.length === 0) {
    return '';
  }

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

function buildPlatformRead(platforms) {
  const socialCount = platforms.filter((platform) => PLATFORM_GROUPS.social.includes(platform)).length;
  const ownedCount = platforms.filter((platform) => PLATFORM_GROUPS.owned.includes(platform)).length;

  if (socialCount > 0 && ownedCount > 0) {
    return 'Your channel mix spans both social and owned platforms, which gives you reach and depth, but it also increases the need for message discipline.';
  }

  if (socialCount > 0) {
    return 'Your current mix leans toward social platforms, so clarity and repeatability matter more than volume.';
  }

  if (ownedCount > 0) {
    return 'Your current mix leans toward owned channels, which is strong for trust and conversion when the message remains focused.';
  }

  return 'Your channel mix is still fairly light, which gives you room to simplify before complexity takes hold.';
}

function buildSnapshotLead(formData) {
  const platformLabels = joinLabels(formData.platforms);
  const consistency = getConsistencyProfile(formData.consistencyLevel);
  const assetLabels = getAssetLabels(formData);

  if (!platformLabels) {
    return `At the moment, this reads as a ${consistency.label.toLowerCase()} with plenty of room to build a calmer, more intentional marketing system.`;
  }

  if (assetLabels.length > 0) {
    return `Across ${platformLabels}, with ${formatList(assetLabels)} already in place, this reads as a ${consistency.label.toLowerCase()} that has useful raw material but still needs clearer alignment.`;
  }

  return `Across ${platformLabels}, this reads as a ${consistency.label.toLowerCase()} that already has useful momentum but still needs clearer alignment.`;
}

function buildMarketingSnapshot(formData) {
  const consistency = getConsistencyProfile(formData.consistencyLevel);
  const primaryAsset = getPrimaryAsset(formData);
  const assetSignal = primaryAsset ? ASSET_SIGNALS[primaryAsset.value]?.snapshot : null;
  const problemLabels = getProblemLabels(formData);
  const problemRead =
    problemLabels.length > 0
      ? `The clearest pressure is around ${formatList(problemLabels).toLowerCase()}, which is shaping how cohesive the overall marketing experience feels.`
      : null;

  return dedupe([
    buildSnapshotLead(formData),
    consistency.snapshot,
    buildPlatformRead(formData.platforms),
    assetSignal,
    problemRead,
  ]).join(' ');
}

function buildWhatsBroken(formData) {
  const selectedProblems = getSelectedOptions(formData.problems, PROBLEM_OPTIONS);

  if (selectedProblems.length === 0) {
    return 'Nothing in your answers suggests a major breakdown. The clearer opportunity is to reduce friction and make the current marketing system more deliberate, more cohesive, and easier to sustain.';
  }

  const primary = PROBLEM_DIAGNOSTICS[selectedProblems[0].value];
  const secondary = selectedProblems[1] ? PROBLEM_DIAGNOSTICS[selectedProblems[1].value] : null;
  const platformLabels = joinLabels(formData.platforms);

  return dedupe([
    platformLabels
      ? `Within ${platformLabels}, the main weakness appears around ${selectedProblems[0].label.toLowerCase()}.`
      : null,
    primary?.broken,
    primary?.impact,
    secondary ? `A second strain is ${selectedProblems[1].label.toLowerCase()}, which adds another layer of friction.` : null,
    secondary?.broken,
  ]).join(' ');
}

function buildGaps(formData) {
  const consistency = getConsistencyProfile(formData.consistencyLevel);
  const gaps = [consistency.gap];
  const assetLabels = getAssetLabels(formData);

  if (formData.problems.includes('unclear-message') && formData.platforms.length >= 2) {
    gaps.push(`Because you are active across ${joinLabels(formData.platforms)}, any lack of message clarity is likely being multiplied rather than contained.`);
  }

  if (formData.problems.includes('lead-generation')) {
    gaps.push('There is likely a missing bridge between attention and conversion, which means the marketing is working harder than the pipeline is capturing.');
  }

  if (formData.assets.length === 0) {
    gaps.push('There are also very few supporting assets in place yet, so each campaign likely has to begin almost from zero.');
  } else if (formData.assets.length >= 2) {
    gaps.push(`You do have useful assets available, especially ${formatList(assetLabels)}, so the gap is less about resources and more about using those assets in a more coordinated way.`);
  }

  if (!formData.platforms.includes('website')) {
    gaps.push('Without a clear website or landing-page anchor, it becomes harder for the rest of the marketing system to convert attention into a next step.');
  }

  return dedupe(gaps).join(' ');
}

function buildPriorityObjects(formData) {
  const priorities = [];
  const platformLabels = joinLabels(formData.platforms);

  getSelectedOptions(formData.problems, PROBLEM_OPTIONS).forEach((problem) => {
    const rule = PROBLEM_DIAGNOSTICS[problem.value];
    if (rule) {
      priorities.push({
        title: rule.priorityTitle,
        detail: platformLabels ? `${rule.priorityDetail} This matters most across ${platformLabels}.` : rule.priorityDetail,
      });
    }
  });

  if (formData.assets.length > 0) {
    const primaryAsset = getPrimaryAsset(formData);
    const assetRule = primaryAsset ? ASSET_SIGNALS[primaryAsset.value] : null;
    if (assetRule) {
      priorities.push({
        title: assetRule.leverageTitle,
        detail: `${assetRule.leverageDetail} This is one of the fastest ways to get more value from ${primaryAsset.label}.`,
      });
    }
  } else {
    priorities.push({
      title: 'Build one core support asset',
      detail:
        'Create one modest but useful asset, such as a landing page, email sequence, or proof-based page, before expanding your activity across more channels.',
    });
  }

  if (formData.problems.length === 0 && formData.platforms.length >= 4) {
    priorities.push({
      title: 'Reduce channel spread',
      detail:
        'Choose the channels most likely to produce results and let those become the center of the system rather than trying to maintain every platform equally.',
    });
  }

  if (formData.consistencyLevel === 'inconsistent' || formData.consistencyLevel === 'somewhat-consistent') {
    priorities.push({
      title: 'Protect the next 30 days with a simpler cadence',
      detail: `Set a realistic publishing rhythm for the next month and repeat it consistently across ${platformLabels || 'your active channels'} before adding new formats, campaigns, or channels.`,
    });
  }

  if (priorities.length === 0) {
    priorities.push({
      title: 'Tighten the system you already have',
      detail:
        'Refine the message, simplify the channel plan, and put existing assets to work more deliberately before adding more complexity.',
    });
  }

  return dedupe(priorities.map((item) => JSON.stringify(item))).map((item) => JSON.parse(item)).slice(0, 3);
}

function buildReassurance(formData) {
  const consistency = getConsistencyProfile(formData.consistencyLevel);
  const hasAssets = formData.assets.length > 0;
  const hasProblems = formData.problems.length > 0;

  if (hasAssets && hasProblems) {
    return `${consistency.reassurance} You already have useful raw material in place, so the next step is not to do everything. It is to focus the system and let the right pieces work together more clearly.`;
  }

  if (hasAssets) {
    return `${consistency.reassurance} You have enough to build from without making the marketing heavier than it needs to be.`;
  }

  return `${consistency.reassurance} Start with a smaller system, stay steady with it, and let clarity build through repetition.`;
}

export function generateAuditReport(formData) {
  const priorityObjects = buildPriorityObjects(formData);

  return {
    marketingSnapshot: buildMarketingSnapshot(formData),
    whatsBroken: buildWhatsBroken(formData),
    gaps: buildGaps(formData),
    fixNext: priorityObjects,
    reassurance: buildReassurance(formData),
    selectedSummary: {
      platforms: formData.platforms,
      consistencyLevel: formData.consistencyLevel,
      problems: formData.problems,
      assets: formData.assets,
    },
    meta: {
      platformLabels: joinLabels(formData.platforms),
      problemLabels: joinLabels(formData.problems),
      assetLabels: joinLabels(formData.assets),
      consistencyLabel:
        CONSISTENCY_OPTIONS.find((option) => option.value === formData.consistencyLevel)?.label ?? 'Not selected',
      primaryProblem: getPrimaryProblem(formData)?.label ?? '',
    },
  };
}
