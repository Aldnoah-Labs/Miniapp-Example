<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    public function validasi($request){
      return $this->validate($request, [
          'nama' => 'required',
          'nrp' => 'required|numeric',
          'email' => 'required',
          'jurusan' => 'required',
      ]);
    }
    public function index()
    {
        // * show all without trashed
        $students = Student::all();

        // * show all with trashed
        // $students = Student::withTrashed()->get();
        // *
        return view('students.index', compact('students'));
    }

    public function create()
    {
        return view('students.create');
    }

    public function store(Request $request)
    {
        $this->validasi($request);

        Student::create($request->all());
        return redirect('/students')->with('status','Data Mahasiswa Berhasil Ditambahkan!');
    }

    public function show(Student $student)
    {
        return view('students.show', compact('student'));
    }

    public function edit(Student $student)
    {
        return view('students.edit', compact('student'));
    }

    public function update(Request $request, Student $student)
    {

        $this->validasi($request);

        Student::where('id', $student->id)
                ->update([
                    'nama' => $request->nama,
                    'nrp' => $request->nrp,
                    'email' => $request->email,
                    'jurusan' => $request->jurusan,
                ]);
        return redirect('/students')->with('status','Data Mahasiswa Berhasil Diubah!');
    }

    public function destroy(Student $student)
    {
        Student::destroy($student->id);
        return redirect('/students')->with('status','Data Mahasiswa Berhasil Dihapus!');
    }
}
