@extends('layout/main')

@section('title','Form Tambah Data Mahasiswa')

@section('container')
<div class="container">
  <div class="row">
    <div class="col-8">
      <h1 class="mt-3">Form Tambah Data Mahasiswa</h1>
      @if ($errors->any())
          <div class="alert alert-danger">
              <ul>
                  @foreach ($errors->all() as $error)
                      <li>{{ $error }}</li>
                  @endforeach
              </ul>
          </div>
          <meta http-equiv="refresh" content="5; url={{url('/students/create')}}"/>
      @endif

      <form method="post" action="{{url('/students')}}">
        {{csrf_field()}}
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" class="form-control" id="nama" placeholder="Masukkan Nama" name="nama" value="{{ old('nama') }}">
        </div>
        <div class="form-group">
          <label for="nrp">NRP</label>
          <input type="text" class="form-control" id="nrp" placeholder="Masukkan Nama" name="nrp" value="{{ old('nrp') }}">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Masukkan Nama" name="email" value="{{ old('email') }}">
        </div>
        <div class="form-group">
          <label for="jurusan">Jurusan</label>
          <input type="text" class="form-control" id="jurusan" placeholder="Masukkan Nama" name="jurusan" value="{{ old('jurusan') }}">
        </div>
        <button type="submit" class="btn btn-primary">Tambah Data!</button>
      </form>
    </div>
  </div>
</div>
@endsection
