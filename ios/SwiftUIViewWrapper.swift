import SwiftUI
import UIKit

class SwiftUIViewWrapper<Content: View>: UIView {
    
    private let hostingController: UIHostingController<Content>
    
    init(rootView: Content) {
        self.hostingController = UIHostingController(rootView: rootView)
        super.init(frame: .zero)
        
        // Add the hostingController's view as a child
        let hostedView = hostingController.view!
        hostedView.translatesAutoresizingMaskIntoConstraints = false
        addSubview(hostedView)
        hostedView.backgroundColor = .clear
        backgroundColor = .clear
        
        // Constrain to fill the wrapper UIView
        NSLayoutConstraint.activate([
            hostedView.topAnchor.constraint(equalTo: topAnchor),
            hostedView.leadingAnchor.constraint(equalTo: leadingAnchor),
            hostedView.trailingAnchor.constraint(equalTo: trailingAnchor),
            hostedView.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
    }
    
    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
