#!/usr/bin/env python3
"""
Quick Sound File Checker
Verifies all required ambient sound files are present
"""

import os
from pathlib import Path

# Required sound files
REQUIRED_FILES = [
    "haiti-ambient.mp3",
    "usa-ambient.mp3",
    "navy-ambient.mp3",
    "university-ambient.mp3",
    "ai-cyber-ambient.mp3",
    "techklein-ambient.mp3"
]

SOUND_DIR = Path(__file__).parent

def check_sound_files():
    """Check if all required sound files exist"""
    print("🎵 Interactive Story Slider - Sound Files Check\n")
    print("=" * 60)
    
    all_present = True
    for file in REQUIRED_FILES:
        filepath = SOUND_DIR / file
        exists = filepath.exists()
        
        status = "✅" if exists else "❌"
        size = f"{filepath.stat().st_size / 1024:.1f} KB" if exists else "Missing"
        
        print(f"{status} {file:<30} {size}")
        
        if not exists:
            all_present = False
    
    print("=" * 60)
    
    if all_present:
        print("\n✅ All sound files present!")
        print("🎉 Your interactive story slider is ready to go!")
    else:
        print("\n⚠️  Some sound files are missing.")
        print("📄 See SOUND-FILES-GUIDE.md for specifications")
        print("🔗 Free sources: freesound.org, zapsplat.com, BBC Sound Effects")
    
    print("\n💡 Tip: Files should be:")
    print("   • Format: MP3")
    print("   • Duration: 30-60 seconds (loops automatically)")
    print("   • Quality: 128-192 kbps")
    print("   • Size: 500KB - 2MB per file")

if __name__ == "__main__":
    check_sound_files()
