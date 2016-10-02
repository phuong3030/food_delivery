Spree::BaseHelper.module_eval do
  def logo(image_path=Spree::Config[:logo], image_alt=Spree::Store.current.name, image_class=Spree::Config[:logo_class])
    link_to image_tag(image_path, alt: image_alt, class: image_class), spree.root_path
  end
end
