//
//  HybridNitroOrb.swift
//  Pods
//
//  Created by Gabriel-Pereira1788 on 12/12/2025.
//

import Foundation
import SwiftUI
import UIKit

class HybridNitroOrb : HybridNitroOrbSpec {
    var viewModel = OrbViewModel()
    var config = OrbConfiguration()
    
    var view: UIView = UIView()
    var swiftUIView: any View
    override init () {
        self.viewModel.setOrbConfiguration(self.config)
        self.swiftUIView = OrbView(viewModel: self.viewModel)
            .aspectRatio(1, contentMode: .fit)
        super.init()
        view = SwiftUIViewWrapper(rootView: self.swiftUIView)
        
    }
    
    var size: Double? {
        didSet {
            guard let size = size else {
                return
            }
            
            self.viewModel.setSize(size)
        }
    }
    
    var backgroundColors: [String]? {
        didSet {
            guard let backgroundColors, !backgroundColors.isEmpty else {
                return
            }
            
            let colors = backgroundColors.map { hex -> Color in
                guard let color = Color(hex: hex) else {
                    assertionFailure("Invalid hex: \(hex)")
                    return .clear
                }
                return color
            }
            
            self.config.backgroundColors = colors
            self.updateViewConfig()
        }
    }
    
    var particleColor: String? = ""{
        didSet {
            guard let particleColor = particleColor, particleColor != "" else {
                return
            }
            self.config.particleColor = Color(hex:particleColor) ?? .accentColor
            self.updateViewConfig()
        }
    }
    
    var glowColor: String? = "" {
        didSet {
            if(glowColor != nil && glowColor != "") {
                self.config.glowColor = Color(hex:glowColor!) ?? .accentColor
                self.updateViewConfig()
            }
        }
    }
    
    var showWavyBlobs: Bool? = false {
        didSet {
            guard showWavyBlobs != nil else {
                return
            }
            self.config.showWavyBlobs = showWavyBlobs ?? false
            self.updateViewConfig()
        }
    }
    
    var showParticles: Bool? = false {
        didSet {
            guard showParticles != nil else {
                return
            }
            
            self.config.showParticles = showParticles ?? false
            self.updateViewConfig()
        }
    }
    
    var showGlowEffects: Bool? = false {
        didSet {
            guard showGlowEffects != nil else {
                return
            }
            
            self.config.showGlowEffects = showGlowEffects ?? false
            self.updateViewConfig()
        }
    }
    
    var showShadow: Bool? = false {
        didSet {
            guard showShadow != nil else {
                return
            }
            
            self.config.showShadow = showShadow ?? false
            self.updateViewConfig()
        }
    }
    
    var coreGlowItensity: Double? = 0.0 {
        didSet {
            guard coreGlowItensity != nil else  {
                return
            }
            
            self.config.coreGlowIntensity = coreGlowItensity ?? 0.0
            self.updateViewConfig()
        }
    }
    
    
    var preset: PresetType? = .mystic {
        didSet {
            guard let preset = preset else {
                return
            }
            
            self.setPreset(preset)
        }
    }
    
    var speed: Double? = 20 {
        didSet {
            self.config.speed = speed ?? 20
            self.updateViewConfig()
        }
    }
    
    private func updateViewConfig() {
        self.viewModel.setOrbConfiguration(self.config)
    }
    
    private func setPreset(_ preset: PresetType) {
        switch preset {
            
        case .mystic:
            self.config.backgroundColors = [.purple, .blue, .indigo]
            self.config.glowColor = .purple
            self.config.coreGlowIntensity = 1.2
            
        case .nature:
            self.config.backgroundColors = [.green, .mint, .teal]
            self.config.glowColor = .green
            self.config.coreGlowIntensity = 1.0
            
        case .sunset:
            self.config.backgroundColors = [.orange, .red, .pink]
            self.config.glowColor = .orange
            self.config.coreGlowIntensity = 0.8
            
        case .ocean:
            self.config.backgroundColors = [.blue, .cyan, .teal]
            self.config.glowColor = .cyan
            
        case .minimal:
            self.config.backgroundColors = [.gray, .white]
            self.config.glowColor = .white
            self.config.showWavyBlobs = false
            self.config.showParticles = false
            
        case .cosmic:
            self.config.backgroundColors = [.purple, .pink, .blue]
            self.config.glowColor = .white
            self.config.coreGlowIntensity = 1.5
            
        case .fire:
            self.config.backgroundColors = [.red, .orange, .yellow]
            self.config.glowColor = .orange
            self.config.coreGlowIntensity = 1.3
            
        case .arctic:
            self.config.backgroundColors = [.cyan, .white, .blue]
            self.config.glowColor = .white
            self.config.coreGlowIntensity = 0.75
            self.config.showParticles = true
            
        case .shadow:
            self.config.backgroundColors = [.black, .gray]
            self.config.glowColor = .gray
            self.config.coreGlowIntensity = 0.7
            self.config.showParticles = false
        }
        
        self.updateViewConfig()
    }
    
    
}
