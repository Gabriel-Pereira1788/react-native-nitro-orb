//
//  HybridNitroOrb.swift
//  Pods
//
//  Created by Gabriel-Pereira1788 on 12/12/2025.
//

import Foundation
import UIKit

class HybridNitroOrb : HybridNitroOrbSpec {
  // UIView
  var view: UIView = UIView()

  // Props
  var isRed: Bool = false {
    didSet {
      view.backgroundColor = isRed ? .red : .black
    }
  }
}
