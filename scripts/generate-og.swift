import AppKit
import Foundation

let width = 1200
let height = 630
let image = NSImage(size: NSSize(width: width, height: height))
image.lockFocus()

NSColor(srgbRed: 11.0 / 255, green: 12.0 / 255, blue: 15.0 / 255, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()

NSColor(srgbRed: 228.0 / 255, green: 201.0 / 255, blue: 154.0 / 255, alpha: 1).setFill()
NSRect(x: 0, y: CGFloat(height - 8), width: CGFloat(width), height: 8).fill()

let title = "HWIDBAN.ORG" as NSString
let titleAttrs: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 84, weight: .medium),
  .foregroundColor: NSColor(srgbRed: 228.0 / 255, green: 201.0 / 255, blue: 154.0 / 255, alpha: 1),
]
title.draw(at: NSPoint(x: 80, y: 300), withAttributes: titleAttrs)

let subtitle = "Hardware ID bans, explained" as NSString
let subtitleAttrs: [NSAttributedString.Key: Any] = [
  .font: NSFont.systemFont(ofSize: 34, weight: .regular),
  .foregroundColor: NSColor(srgbRed: 163.0 / 255, green: 158.0 / 255, blue: 147.0 / 255, alpha: 1),
]
subtitle.draw(at: NSPoint(x: 84, y: 230), withAttributes: subtitleAttrs)

image.unlockFocus()

guard let tiff = image.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiff),
      let png = rep.representation(using: .png, properties: [:]) else {
  fputs("Could not encode PNG\n", stderr)
  exit(1)
}

let url = URL(fileURLWithPath: "public/og.png")
try png.write(to: url)
