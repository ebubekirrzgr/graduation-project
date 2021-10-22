export default function productAddValidate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Ürün Adı girmek zorunludur !';
  } else if (values.title.length > 100) {
    errors.title = `Ürün Adı kısmı 100'den büyük olamaz !`;
  }

  if (!values.description) {
    errors.description = 'Ürün Açıklaması girmek zorunludur !';
  } else if (values.description.length > 500) {
    errors.description = `Ürün Açıklaması 500'den büyük olamaz !`;
  }

  if (!values.category.title) {
    errors.category = 'Kategori seçmek zorunludur !';
  }

  if (!values.brand.title) {
    errors.brand = 'Marka seçmek zorunludur !';
  }

  if (!values.color.title) {
    errors.color = 'Renk seçmek zorunludur !';
  }

  if (!values.status.title) {
    errors.status = 'Kullanım Durumu seçmek zorunludur !';
  }

  if (!values.price) {
    errors.price = 'Fiyat girmek zorunludur !';
  }

  if (!values.imageUrl) {
    errors.imageUrl = 'Ürün resmi eklemek zorunludur !';
  }

  return errors;
}
