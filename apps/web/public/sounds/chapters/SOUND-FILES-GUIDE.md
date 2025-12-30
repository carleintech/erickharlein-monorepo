# 🎵 Interactive Story Slider - Sound Files Guide

## Overview
This directory contains ambient sound files that play automatically as users navigate through each chapter of the story. Each chapter has its own unique atmospheric soundscape that enhances immersion.

## Sound Specifications

### Technical Requirements
- **Format**: MP3 (best browser compatibility)
- **Volume**: Files will be played at 15% (0.15) volume
- **Loop**: All files loop seamlessly
- **Duration**: 30-60 seconds (loops automatically)
- **Quality**: 128-192 kbps (balance between quality and file size)
- **Channels**: Stereo or Mono

### File Naming Convention
All files must match these exact names:
- `haiti-ambient.mp3`
- `usa-ambient.mp3`
- `navy-ambient.mp3`
- `university-ambient.mp3`
- `ai-cyber-ambient.mp3`
- `techklein-ambient.mp3`

## Chapter Sound Descriptions

### 1. Haiti (`haiti-ambient.mp3`)
**Atmosphere**: Wind + distant waves
- **Mood**: Warm, nostalgic, tropical
- **Elements**: 
  - Gentle Caribbean wind
  - Distant ocean waves
  - Subtle tropical bird calls (optional)
  - Light rustling of palm leaves
- **Tone**: Peaceful yet grounding
- **Example**: Light breeze with ocean ambience, evoking island memories

### 2. USA (`usa-ambient.mp3`)
**Atmosphere**: City ambience
- **Mood**: Bustling, energetic, opportunity
- **Elements**:
  - Distant city traffic (subtle, not overwhelming)
  - Occasional car horn (far away)
  - Urban hum
  - Footsteps on pavement (subtle)
- **Tone**: Dynamic but not chaotic
- **Example**: New York street ambience at medium distance

### 3. Navy (`navy-ambient.mp3`)
**Atmosphere**: Subtle sonar ping
- **Mood**: Structured, disciplined, focused
- **Elements**:
  - Slow, rhythmic sonar pings (every 4-6 seconds)
  - Deep ocean rumble/drone
  - Metallic ship hull resonance (very subtle)
  - Underwater pressure ambience
- **Tone**: Professional, precise, honorable
- **Example**: Submarine interior with occasional sonar

### 4. University (`university-ambient.mp3`)
**Atmosphere**: Soft typing/library
- **Mood**: Studious, contemplative, growth
- **Elements**:
  - Soft keyboard typing (distant, rhythmic)
  - Pages turning occasionally
  - Ambient library room tone
  - Faint footsteps on carpeted floor
- **Tone**: Quiet focus, intellectual pursuit
- **Example**: Study hall or quiet library ambience

### 5. AI & Cyber (`ai-cyber-ambient.mp3`)
**Atmosphere**: Deep synth pulse
- **Mood**: Futuristic, technological, mysterious
- **Elements**:
  - Low-frequency synthesizer pulse (60-80 BPM)
  - Digital glitch sounds (very subtle)
  - Electronic data stream (white noise texture)
  - Circuit hum/electromagnetic field
- **Tone**: Modern, cutting-edge, slightly mysterious
- **Example**: Cyberpunk ambient, digital laboratory

### 6. TechKlein (`techklein-ambient.mp3`)
**Atmosphere**: Rising tone resolve
- **Mood**: Triumphant, purposeful, arrival
- **Elements**:
  - Slowly rising sustained tone (over 30 seconds)
  - Harmonic resolution (major chord)
  - Subtle strings or pad synth
  - Sense of achievement and continuation
- **Tone**: Inspiring, forward-looking, resolute
- **Example**: Cinematic resolution, hero's theme

## User Controls

### Volume Toggle
Users can toggle sound on/off via the control bar at the bottom:
- **Sound On** (🔊): Ambient sounds play at 15% volume
- **Sound Off** (🔇): All ambient sounds muted

### Auto-play Behavior
- Sounds start automatically when entering a chapter
- Smooth fade between chapters (0.5s crossfade)
- Loops seamlessly until user changes chapter
- No sound plays if browser blocks autoplay (graceful degradation)

## Where to Find Sound Files

### Free Sources
1. **Freesound.org**: Community-uploaded ambient sounds (CC licensed)
2. **Zapsplat.com**: Free sound effects library
3. **BBC Sound Effects**: Free archive of production sound effects
4. **YouTube Audio Library**: Royalty-free ambient tracks

### Paid/Professional Sources
1. **AudioJungle** (Envato Market): Professional ambient loops
2. **Epidemic Sound**: Subscription-based sound effects
3. **Artlist**: Sound effects and ambient tracks

### AI Generation
1. **ElevenLabs Sound Effects**: AI-generated ambient sounds
2. **Stable Audio**: Text-to-audio generation
3. **AudioCraft (Meta)**: Open-source audio generation

## Implementation Status

✅ Sound system integrated into component
✅ Volume toggle with visual indicator
✅ Auto-play on chapter change
✅ Loop functionality
✅ 15% volume setting
✅ Graceful degradation (no sound = no error)
✅ Session persistence (remembers sound preference)

⏳ **Pending**: Upload actual MP3 files to this directory

## File Size Recommendations

Keep files optimized for web:
- **Target size**: 500KB - 1MB per file
- **Max size**: 2MB per file
- **Total combined**: < 8MB for all 6 files

## Testing Checklist

- [ ] All 6 MP3 files uploaded
- [ ] Files named exactly as specified
- [ ] Each file loops seamlessly
- [ ] Volume is appropriate at 15%
- [ ] No clipping or distortion
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile playback works
- [ ] Sound toggle functions correctly
- [ ] Smooth transitions between chapters

## Browser Compatibility

The Web Audio API and HTML5 Audio are supported in:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (with autoplay restrictions)

**Note**: Some browsers block autoplay by default. The component handles this gracefully with a console log but no error thrown to the user.

---

## Quick Start

1. Create/download 6 ambient sound files matching the descriptions above
2. Name them exactly as specified
3. Upload to `apps/web/public/sounds/chapters/`
4. Test in development: `pnpm dev`
5. Navigate through story chapters and verify sound transitions
6. Adjust volume/atmosphere as needed

**Questions?** Refer to `docs/INTERACTIVE-STORY-IMPLEMENTATION.md` for full implementation details.
