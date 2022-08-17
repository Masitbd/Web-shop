import httpReq from './http.service';

class productService {
  async getAllProduct(): Promise<IProduct[]> {
    const { data } = await httpReq.get('/product');
    return data;
  }
}
export default new productService();
