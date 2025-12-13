import SwiftUI

class OrbViewModel:ObservableObject {
    @Published var config:OrbConfiguration = OrbConfiguration()
    
    func setOrbConfiguration(_ config:OrbConfiguration) {
        self.config = config
    }
}
